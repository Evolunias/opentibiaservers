import Tibia81NonPvpServersKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpServersKeywordPage />;
}
