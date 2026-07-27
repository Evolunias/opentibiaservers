import HighrateTibiantisWebsiteKeywordPage, { generateMetadata } from './highrate-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisWebsiteKeywordPage />;
}
