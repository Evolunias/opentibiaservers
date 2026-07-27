import OfficialTibiameOtsKeywordPage, { generateMetadata } from './official-tibiame-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameOtsKeywordPage />;
}
