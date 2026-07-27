import RetroTibiaPrivateServerSwedenKeywordPage, { generateMetadata } from './retro-tibia-private-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaPrivateServerSwedenKeywordPage />;
}
