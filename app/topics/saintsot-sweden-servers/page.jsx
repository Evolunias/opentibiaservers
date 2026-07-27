import SaintsotSwedenServersKeywordPage, { generateMetadata } from './saintsot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSwedenServersKeywordPage />;
}
