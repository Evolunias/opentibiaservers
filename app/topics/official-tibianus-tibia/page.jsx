import OfficialTibianusTibiaKeywordPage, { generateMetadata } from './official-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusTibiaKeywordPage />;
}
