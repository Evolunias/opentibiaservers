import HighrateCanobOtsKeywordPage, { generateMetadata } from './highrate-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOtsKeywordPage />;
}
