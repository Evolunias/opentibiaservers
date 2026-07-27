import Tibia80PvpClientKeywordPage, { generateMetadata } from './tibia-8-0-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpClientKeywordPage />;
}
