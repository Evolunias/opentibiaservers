import LowrateTibiantisGuideKeywordPage, { generateMetadata } from './lowrate-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisGuideKeywordPage />;
}
