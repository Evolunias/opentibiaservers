import OfficialTibiaretroOtsKeywordPage, { generateMetadata } from './official-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroOtsKeywordPage />;
}
