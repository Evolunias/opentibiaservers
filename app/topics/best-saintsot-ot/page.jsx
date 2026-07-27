import BestSaintsotOtKeywordPage, { generateMetadata } from './best-saintsot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotOtKeywordPage />;
}
