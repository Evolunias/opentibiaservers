import Tibia15PvpClientKeywordPage, { generateMetadata } from './tibia-15-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpClientKeywordPage />;
}
