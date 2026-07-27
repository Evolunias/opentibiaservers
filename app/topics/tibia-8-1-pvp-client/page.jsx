import Tibia81PvpClientKeywordPage, { generateMetadata } from './tibia-8-1-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpClientKeywordPage />;
}
