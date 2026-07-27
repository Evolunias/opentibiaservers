import NepreniaWikiKeywordPage, { generateMetadata } from './neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWikiKeywordPage />;
}
