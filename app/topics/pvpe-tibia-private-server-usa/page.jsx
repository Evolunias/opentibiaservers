import PvpeTibiaPrivateServerUsaKeywordPage, { generateMetadata } from './pvpe-tibia-private-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiaPrivateServerUsaKeywordPage />;
}
