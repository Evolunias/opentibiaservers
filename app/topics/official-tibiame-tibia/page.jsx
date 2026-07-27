import OfficialTibiameTibiaKeywordPage, { generateMetadata } from './official-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameTibiaKeywordPage />;
}
