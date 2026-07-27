import OfficialNoxiousotWebsiteKeywordPage, { generateMetadata } from './official-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotWebsiteKeywordPage />;
}
