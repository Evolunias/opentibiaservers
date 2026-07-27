import BestSabrehavenOtKeywordPage, { generateMetadata } from './best-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenOtKeywordPage />;
}
