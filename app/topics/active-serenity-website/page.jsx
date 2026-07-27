import ActiveSerenityWebsiteKeywordPage, { generateMetadata } from './active-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityWebsiteKeywordPage />;
}
