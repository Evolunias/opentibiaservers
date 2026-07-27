import BestAlasteraOtKeywordPage, { generateMetadata } from './best-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraOtKeywordPage />;
}
