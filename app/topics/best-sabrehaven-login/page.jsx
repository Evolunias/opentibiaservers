import BestSabrehavenLoginKeywordPage, { generateMetadata } from './best-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSabrehavenLoginKeywordPage />;
}
