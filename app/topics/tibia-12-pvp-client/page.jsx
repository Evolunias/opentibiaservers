import Tibia12PvpClientKeywordPage, { generateMetadata } from './tibia-12-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpClientKeywordPage />;
}
