import TitaniaWikiKeywordPage, { generateMetadata } from './titania-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaWikiKeywordPage />;
}
