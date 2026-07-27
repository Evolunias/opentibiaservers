import Tibia11PvpClientKeywordPage, { generateMetadata } from './tibia-11-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpClientKeywordPage />;
}
