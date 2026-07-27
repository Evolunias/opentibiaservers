import SaintsotMapKeywordPage, { generateMetadata } from './saintsot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotMapKeywordPage />;
}
