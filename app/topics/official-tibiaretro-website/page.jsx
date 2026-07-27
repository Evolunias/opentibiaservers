import OfficialTibiaretroWebsiteKeywordPage, { generateMetadata } from './official-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroWebsiteKeywordPage />;
}
