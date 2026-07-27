import Tibia96PvpClientKeywordPage, { generateMetadata } from './tibia-9-6-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpClientKeywordPage />;
}
