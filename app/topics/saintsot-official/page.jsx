import SaintsotOfficialKeywordPage, { generateMetadata } from './saintsot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotOfficialKeywordPage />;
}
