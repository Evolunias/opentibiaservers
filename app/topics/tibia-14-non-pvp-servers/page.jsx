import Tibia14NonPvpServersKeywordPage, { generateMetadata } from './tibia-14-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpServersKeywordPage />;
}
