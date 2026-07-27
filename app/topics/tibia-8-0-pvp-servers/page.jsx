import Tibia80PvpServersKeywordPage, { generateMetadata } from './tibia-8-0-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpServersKeywordPage />;
}
