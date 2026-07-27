import Tibia74ServerNonPvpKeywordPage, { generateMetadata } from './tibia-7-4-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerNonPvpKeywordPage />;
}
