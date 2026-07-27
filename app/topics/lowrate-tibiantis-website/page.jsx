import LowrateTibiantisWebsiteKeywordPage, { generateMetadata } from './lowrate-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisWebsiteKeywordPage />;
}
