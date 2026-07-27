import Tibia15PvpServersKeywordPage, { generateMetadata } from './tibia-15-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpServersKeywordPage />;
}
