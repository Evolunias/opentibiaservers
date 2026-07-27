import OfficialSaintsotOtsKeywordPage, { generateMetadata } from './official-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotOtsKeywordPage />;
}
