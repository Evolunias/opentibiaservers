import Tibia96NonPvpServersKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpServersKeywordPage />;
}
