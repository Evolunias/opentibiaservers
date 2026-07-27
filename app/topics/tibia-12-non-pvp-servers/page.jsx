import Tibia12NonPvpServersKeywordPage, { generateMetadata } from './tibia-12-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpServersKeywordPage />;
}
