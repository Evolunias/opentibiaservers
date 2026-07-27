import BestCanobServerKeywordPage, { generateMetadata } from './best-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobServerKeywordPage />;
}
