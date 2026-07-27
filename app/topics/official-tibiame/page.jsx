import OfficialTibiameKeywordPage, { generateMetadata } from './official-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameKeywordPage />;
}
