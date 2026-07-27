import Tibia1098PvpServersKeywordPage, { generateMetadata } from './tibia-10-98-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpServersKeywordPage />;
}
