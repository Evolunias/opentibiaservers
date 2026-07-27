import Tibia84PvpServersKeywordPage, { generateMetadata } from './tibia-8-4-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpServersKeywordPage />;
}
