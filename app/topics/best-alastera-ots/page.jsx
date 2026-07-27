import BestAlasteraOtsKeywordPage, { generateMetadata } from './best-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraOtsKeywordPage />;
}
