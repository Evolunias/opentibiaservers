import LowrateYurotsWikiKeywordPage, { generateMetadata } from './lowrate-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsWikiKeywordPage />;
}
