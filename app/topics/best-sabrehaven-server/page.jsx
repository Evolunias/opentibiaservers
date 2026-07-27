import BestSabrehavenServerKeywordPage, { generateMetadata } from './best-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenServerKeywordPage />;
}
