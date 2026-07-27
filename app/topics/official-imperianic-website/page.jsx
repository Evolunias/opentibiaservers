import OfficialImperianicWebsiteKeywordPage, { generateMetadata } from './official-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicWebsiteKeywordPage />;
}
