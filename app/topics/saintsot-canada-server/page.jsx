import SaintsotCanadaServerKeywordPage, { generateMetadata } from './saintsot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotCanadaServerKeywordPage />;
}
