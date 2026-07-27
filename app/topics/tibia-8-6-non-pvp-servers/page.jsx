import Tibia86NonPvpServersKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpServersKeywordPage />;
}
