import BestCanobOtServerKeywordPage, { generateMetadata } from './best-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobOtServerKeywordPage />;
}
