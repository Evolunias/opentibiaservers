import Tibia80NonPvpServersKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpServersKeywordPage />;
}
