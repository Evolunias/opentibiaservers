import OfficialTibiaretroPrivateServerKeywordPage, { generateMetadata } from './official-tibiaretro-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroPrivateServerKeywordPage />;
}
