import Tibia772NonPvpStatusKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpStatusKeywordPage />;
}
