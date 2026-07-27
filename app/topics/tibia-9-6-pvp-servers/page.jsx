import Tibia96PvpServersKeywordPage, { generateMetadata } from './tibia-9-6-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpServersKeywordPage />;
}
