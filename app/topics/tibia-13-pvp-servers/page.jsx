import Tibia13PvpServersKeywordPage, { generateMetadata } from './tibia-13-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpServersKeywordPage />;
}
