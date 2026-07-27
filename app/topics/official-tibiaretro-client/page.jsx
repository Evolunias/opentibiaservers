import OfficialTibiaretroClientKeywordPage, { generateMetadata } from './official-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroClientKeywordPage />;
}
