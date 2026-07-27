import OfficialTibiaretroOfficialKeywordPage, { generateMetadata } from './official-tibiaretro-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroOfficialKeywordPage />;
}
