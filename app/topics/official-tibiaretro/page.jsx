import OfficialTibiaretroKeywordPage, { generateMetadata } from './official-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroKeywordPage />;
}
