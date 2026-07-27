import TopSaintsotOtKeywordPage, { generateMetadata } from './top-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotOtKeywordPage />;
}
