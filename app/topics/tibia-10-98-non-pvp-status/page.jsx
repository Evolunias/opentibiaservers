import Tibia1098NonPvpStatusKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpStatusKeywordPage />;
}
