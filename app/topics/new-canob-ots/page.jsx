import NewCanobOtsKeywordPage, { generateMetadata } from './new-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobOtsKeywordPage />;
}
