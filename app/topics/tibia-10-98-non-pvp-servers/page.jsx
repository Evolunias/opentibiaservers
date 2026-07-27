import Tibia1098NonPvpServersKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpServersKeywordPage />;
}
