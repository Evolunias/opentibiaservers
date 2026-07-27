import Tibia100PvpServersKeywordPage, { generateMetadata } from './tibia-10-0-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpServersKeywordPage />;
}
