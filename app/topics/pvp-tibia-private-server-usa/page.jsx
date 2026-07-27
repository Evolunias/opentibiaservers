import PvpTibiaPrivateServerUsaKeywordPage, { generateMetadata } from './pvp-tibia-private-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpTibiaPrivateServerUsaKeywordPage />;
}
