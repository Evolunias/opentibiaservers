import Tibia71NonPvpServersKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpServersKeywordPage />;
}
