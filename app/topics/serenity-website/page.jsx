import SerenityWebsiteKeywordPage, { generateMetadata } from './serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityWebsiteKeywordPage />;
}
