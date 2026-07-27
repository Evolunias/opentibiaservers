import BestSabrehavenOtsKeywordPage, { generateMetadata } from './best-sabrehaven-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenOtsKeywordPage />;
}
