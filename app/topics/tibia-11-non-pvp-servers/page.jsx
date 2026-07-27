import Tibia11NonPvpServersKeywordPage, { generateMetadata } from './tibia-11-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpServersKeywordPage />;
}
