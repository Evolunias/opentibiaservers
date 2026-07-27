import BestXanteriaLoginKeywordPage, { generateMetadata } from './best-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaLoginKeywordPage />;
}
