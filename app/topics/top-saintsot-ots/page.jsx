import TopSaintsotOtsKeywordPage, { generateMetadata } from './top-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotOtsKeywordPage />;
}
