import Tibia772PvpClientKeywordPage, { generateMetadata } from './tibia-7-72-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpClientKeywordPage />;
}
