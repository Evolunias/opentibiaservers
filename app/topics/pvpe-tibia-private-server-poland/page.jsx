import PvpeTibiaPrivateServerPolandKeywordPage, { generateMetadata } from './pvpe-tibia-private-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTibiaPrivateServerPolandKeywordPage />;
}
