import TopSaintsotOtServerKeywordPage, { generateMetadata } from './top-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSaintsotOtServerKeywordPage />;
}
