import Tibia74PvpStatusKeywordPage, { generateMetadata } from './tibia-7-4-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpStatusKeywordPage />;
}
