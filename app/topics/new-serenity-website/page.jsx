import NewSerenityWebsiteKeywordPage, { generateMetadata } from './new-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityWebsiteKeywordPage />;
}
