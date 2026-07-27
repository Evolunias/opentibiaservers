import LowrateSerenityWikiKeywordPage, { generateMetadata } from './lowrate-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityWikiKeywordPage />;
}
