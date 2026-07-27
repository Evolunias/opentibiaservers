import OfficialTibiaretroServerKeywordPage, { generateMetadata } from './official-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroServerKeywordPage />;
}
