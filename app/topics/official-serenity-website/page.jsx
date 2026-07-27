import OfficialSerenityWebsiteKeywordPage, { generateMetadata } from './official-serenity-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityWebsiteKeywordPage />;
}
