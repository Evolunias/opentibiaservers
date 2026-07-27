import BestImperianicLoginKeywordPage, { generateMetadata } from './best-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicLoginKeywordPage />;
}
