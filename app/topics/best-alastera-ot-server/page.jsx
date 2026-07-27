import BestAlasteraOtServerKeywordPage, { generateMetadata } from './best-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraOtServerKeywordPage />;
}
