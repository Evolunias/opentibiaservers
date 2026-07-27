import MistOfDeathWikiKeywordPage, { generateMetadata } from './mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathWikiKeywordPage />;
}
