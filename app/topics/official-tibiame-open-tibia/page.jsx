import OfficialTibiameOpenTibiaKeywordPage, { generateMetadata } from './official-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameOpenTibiaKeywordPage />;
}
