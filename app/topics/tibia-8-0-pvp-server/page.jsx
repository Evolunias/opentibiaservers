import Tibia80PvpServerKeywordPage, { generateMetadata } from './tibia-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpServerKeywordPage />;
}
