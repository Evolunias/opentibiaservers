import SaintsotArgentinaServersKeywordPage, { generateMetadata } from './saintsot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotArgentinaServersKeywordPage />;
}
