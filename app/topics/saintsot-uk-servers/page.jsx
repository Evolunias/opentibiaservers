import SaintsotUkServersKeywordPage, { generateMetadata } from './saintsot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotUkServersKeywordPage />;
}
