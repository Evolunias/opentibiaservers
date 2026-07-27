import TopCanobOtsKeywordPage, { generateMetadata } from './top-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobOtsKeywordPage />;
}
