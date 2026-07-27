import Tibia14PvpClientKeywordPage, { generateMetadata } from './tibia-14-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpClientKeywordPage />;
}
