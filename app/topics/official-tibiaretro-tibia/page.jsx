import OfficialTibiaretroTibiaKeywordPage, { generateMetadata } from './official-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroTibiaKeywordPage />;
}
