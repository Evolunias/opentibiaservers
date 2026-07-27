import LowrateTibiantisKeywordPage, { generateMetadata } from './lowrate-tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisKeywordPage />;
}
