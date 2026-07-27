import TopSerenityWebsiteKeywordPage, { generateMetadata } from './top-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityWebsiteKeywordPage />;
}
