import BestCanobOtKeywordPage, { generateMetadata } from './best-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobOtKeywordPage />;
}
