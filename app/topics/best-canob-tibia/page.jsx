import BestCanobTibiaKeywordPage, { generateMetadata } from './best-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCanobTibiaKeywordPage />;
}
