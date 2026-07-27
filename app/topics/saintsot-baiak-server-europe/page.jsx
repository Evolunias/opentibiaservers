import SaintsotBaiakServerEuropeKeywordPage, { generateMetadata } from './saintsot-baiak-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotBaiakServerEuropeKeywordPage />;
}
