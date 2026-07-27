import Tibia854NonPvpStatusKeywordPage, { generateMetadata } from './tibia-8-54-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854NonPvpStatusKeywordPage />;
}
