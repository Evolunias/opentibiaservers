import Tibia74NonPvpStatusKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpStatusKeywordPage />;
}
