import BestCanobOpenTibiaKeywordPage, { generateMetadata } from './best-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobOpenTibiaKeywordPage />;
}
