import BestCanobClientKeywordPage, { generateMetadata } from './best-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobClientKeywordPage />;
}
