import BestXanteriaClientKeywordPage, { generateMetadata } from './best-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaClientKeywordPage />;
}
