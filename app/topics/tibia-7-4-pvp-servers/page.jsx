import Tibia74PvpServersKeywordPage, { generateMetadata } from './tibia-7-4-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpServersKeywordPage />;
}
