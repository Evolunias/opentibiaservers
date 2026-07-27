import BestOxygenotServerKeywordPage, { generateMetadata } from './best-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotServerKeywordPage />;
}
