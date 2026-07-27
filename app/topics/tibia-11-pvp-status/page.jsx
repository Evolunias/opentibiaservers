import Tibia11PvpStatusKeywordPage, { generateMetadata } from './tibia-11-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpStatusKeywordPage />;
}
