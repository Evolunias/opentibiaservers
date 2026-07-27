import BestXanteriaOtsKeywordPage, { generateMetadata } from './best-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaOtsKeywordPage />;
}
