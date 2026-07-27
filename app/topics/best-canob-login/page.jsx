import BestCanobLoginKeywordPage, { generateMetadata } from './best-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobLoginKeywordPage />;
}
