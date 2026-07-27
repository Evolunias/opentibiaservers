import OfficialTibiameServerKeywordPage, { generateMetadata } from './official-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameServerKeywordPage />;
}
