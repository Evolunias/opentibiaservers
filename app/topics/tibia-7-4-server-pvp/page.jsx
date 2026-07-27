import Tibia74ServerPvpKeywordPage, { generateMetadata } from './tibia-7-4-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerPvpKeywordPage />;
}
