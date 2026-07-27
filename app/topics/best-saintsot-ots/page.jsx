import BestSaintsotOtsKeywordPage, { generateMetadata } from './best-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotOtsKeywordPage />;
}
