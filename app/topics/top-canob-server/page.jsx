import TopCanobServerKeywordPage, { generateMetadata } from './top-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobServerKeywordPage />;
}
