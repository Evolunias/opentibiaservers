import Tibia76PvpServersKeywordPage, { generateMetadata } from './tibia-7-6-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpServersKeywordPage />;
}
