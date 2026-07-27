import LowrateThorniaWikiKeywordPage, { generateMetadata } from './lowrate-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaWikiKeywordPage />;
}
