import PopularNilotWikiKeywordPage, { generateMetadata } from './popular-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotWikiKeywordPage />;
}
