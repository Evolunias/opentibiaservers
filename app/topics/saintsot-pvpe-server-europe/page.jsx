import SaintsotPvpeServerEuropeKeywordPage, { generateMetadata } from './saintsot-pvpe-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotPvpeServerEuropeKeywordPage />;
}
