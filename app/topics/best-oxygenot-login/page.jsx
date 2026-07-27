import BestOxygenotLoginKeywordPage, { generateMetadata } from './best-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotLoginKeywordPage />;
}
