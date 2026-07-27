import SaintsotBrazilServersKeywordPage, { generateMetadata } from './saintsot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotBrazilServersKeywordPage />;
}
