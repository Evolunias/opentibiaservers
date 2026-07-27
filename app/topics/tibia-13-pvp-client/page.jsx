import Tibia13PvpClientKeywordPage, { generateMetadata } from './tibia-13-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpClientKeywordPage />;
}
