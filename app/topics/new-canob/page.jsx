import NewCanobKeywordPage, { generateMetadata } from './new-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobKeywordPage />;
}
