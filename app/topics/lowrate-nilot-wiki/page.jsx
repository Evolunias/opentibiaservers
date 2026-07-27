import LowrateNilotWikiKeywordPage, { generateMetadata } from './lowrate-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotWikiKeywordPage />;
}
