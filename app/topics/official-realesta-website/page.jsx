import OfficialRealestaWebsiteKeywordPage, { generateMetadata } from './official-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaWebsiteKeywordPage />;
}
