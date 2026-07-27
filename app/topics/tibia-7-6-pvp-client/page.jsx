import Tibia76PvpClientKeywordPage, { generateMetadata } from './tibia-7-6-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpClientKeywordPage />;
}
