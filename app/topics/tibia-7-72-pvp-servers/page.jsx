import Tibia772PvpServersKeywordPage, { generateMetadata } from './tibia-7-72-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpServersKeywordPage />;
}
