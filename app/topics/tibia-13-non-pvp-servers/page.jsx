import Tibia13NonPvpServersKeywordPage, { generateMetadata } from './tibia-13-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpServersKeywordPage />;
}
