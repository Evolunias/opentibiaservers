import NewCanobServerKeywordPage, { generateMetadata } from './new-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobServerKeywordPage />;
}
