import SaintsotPolandServersKeywordPage, { generateMetadata } from './saintsot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotPolandServersKeywordPage />;
}
