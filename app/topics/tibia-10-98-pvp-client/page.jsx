import Tibia1098PvpClientKeywordPage, { generateMetadata } from './tibia-10-98-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpClientKeywordPage />;
}
