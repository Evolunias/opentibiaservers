import Tibia84PvpServerListKeywordPage, { generateMetadata } from './tibia-8-4-pvp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpServerListKeywordPage />;
}
