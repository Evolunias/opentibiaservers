import OfficialTibijkaWebsiteKeywordPage, { generateMetadata } from './official-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaWebsiteKeywordPage />;
}
