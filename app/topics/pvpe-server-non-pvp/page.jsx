import PvpeServerNonPvpKeywordPage, { generateMetadata } from './pvpe-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerNonPvpKeywordPage />;
}
