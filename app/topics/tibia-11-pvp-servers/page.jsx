import Tibia11PvpServersKeywordPage, { generateMetadata } from './tibia-11-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpServersKeywordPage />;
}
