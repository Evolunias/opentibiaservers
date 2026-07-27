import NewCanobClientKeywordPage, { generateMetadata } from './new-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobClientKeywordPage />;
}
