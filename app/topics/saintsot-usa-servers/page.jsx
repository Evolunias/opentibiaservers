import SaintsotUsaServersKeywordPage, { generateMetadata } from './saintsot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotUsaServersKeywordPage />;
}
