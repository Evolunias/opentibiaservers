import PopularSerenityWebsiteKeywordPage, { generateMetadata } from './popular-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityWebsiteKeywordPage />;
}
