import SaintsotChileServersKeywordPage, { generateMetadata } from './saintsot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotChileServersKeywordPage />;
}
