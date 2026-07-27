import BestCanobKeywordPage, { generateMetadata } from './best-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobKeywordPage />;
}
