import Tibia1098NonPvpClientKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpClientKeywordPage />;
}
