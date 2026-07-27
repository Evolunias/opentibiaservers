import RetroTibiaPrivateServerUsaKeywordPage, { generateMetadata } from './retro-tibia-private-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroTibiaPrivateServerUsaKeywordPage />;
}
