import Tibia12PvpServersKeywordPage, { generateMetadata } from './tibia-12-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpServersKeywordPage />;
}
