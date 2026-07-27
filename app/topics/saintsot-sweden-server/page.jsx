import SaintsotSwedenServerKeywordPage, { generateMetadata } from './saintsot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSwedenServerKeywordPage />;
}
