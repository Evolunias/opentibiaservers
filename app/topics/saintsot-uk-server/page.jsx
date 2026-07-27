import SaintsotUkServerKeywordPage, { generateMetadata } from './saintsot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotUkServerKeywordPage />;
}
