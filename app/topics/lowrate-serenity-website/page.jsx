import LowrateSerenityWebsiteKeywordPage, { generateMetadata } from './lowrate-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSerenityWebsiteKeywordPage />;
}
