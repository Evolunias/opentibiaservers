import RetroTibiaPrivateServerUkKeywordPage, { generateMetadata } from './retro-tibia-private-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaPrivateServerUkKeywordPage />;
}
