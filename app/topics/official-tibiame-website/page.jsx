import OfficialTibiameWebsiteKeywordPage, { generateMetadata } from './official-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameWebsiteKeywordPage />;
}
