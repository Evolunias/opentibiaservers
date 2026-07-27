import SaintsotEuropeServersKeywordPage, { generateMetadata } from './saintsot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotEuropeServersKeywordPage />;
}
