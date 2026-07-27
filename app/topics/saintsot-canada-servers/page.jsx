import SaintsotCanadaServersKeywordPage, { generateMetadata } from './saintsot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCanadaServersKeywordPage />;
}
