import Tibia854NonPvpServersKeywordPage, { generateMetadata } from './tibia-8-54-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854NonPvpServersKeywordPage />;
}
