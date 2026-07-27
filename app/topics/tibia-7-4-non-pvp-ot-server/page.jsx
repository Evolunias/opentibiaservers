import Tibia74NonPvpOtServerKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpOtServerKeywordPage />;
}
