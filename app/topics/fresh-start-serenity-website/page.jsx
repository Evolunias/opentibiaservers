import FreshStartSerenityWebsiteKeywordPage, { generateMetadata } from './fresh-start-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityWebsiteKeywordPage />;
}
