import OfficialTibiameOfficialKeywordPage, { generateMetadata } from './official-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameOfficialKeywordPage />;
}
