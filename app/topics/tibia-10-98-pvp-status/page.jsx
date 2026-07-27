import Tibia1098PvpStatusKeywordPage, { generateMetadata } from './tibia-10-98-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpStatusKeywordPage />;
}
