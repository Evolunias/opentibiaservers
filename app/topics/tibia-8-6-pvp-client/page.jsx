import Tibia86PvpClientKeywordPage, { generateMetadata } from './tibia-8-6-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpClientKeywordPage />;
}
