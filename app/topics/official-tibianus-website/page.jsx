import OfficialTibianusWebsiteKeywordPage, { generateMetadata } from './official-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusWebsiteKeywordPage />;
}
