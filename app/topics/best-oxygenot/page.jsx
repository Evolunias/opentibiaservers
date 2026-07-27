import BestOxygenotKeywordPage, { generateMetadata } from './best-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotKeywordPage />;
}
