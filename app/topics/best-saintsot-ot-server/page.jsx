import BestSaintsotOtServerKeywordPage, { generateMetadata } from './best-saintsot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotOtServerKeywordPage />;
}
