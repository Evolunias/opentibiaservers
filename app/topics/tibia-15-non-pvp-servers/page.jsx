import Tibia15NonPvpServersKeywordPage, { generateMetadata } from './tibia-15-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpServersKeywordPage />;
}
