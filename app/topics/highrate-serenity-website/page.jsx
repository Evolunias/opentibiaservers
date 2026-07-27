import HighrateSerenityWebsiteKeywordPage, { generateMetadata } from './highrate-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityWebsiteKeywordPage />;
}
