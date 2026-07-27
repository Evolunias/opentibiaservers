import NewCanobOtKeywordPage, { generateMetadata } from './new-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobOtKeywordPage />;
}
