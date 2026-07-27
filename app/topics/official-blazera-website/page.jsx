import OfficialBlazeraWebsiteKeywordPage, { generateMetadata } from './official-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialBlazeraWebsiteKeywordPage />;
}
