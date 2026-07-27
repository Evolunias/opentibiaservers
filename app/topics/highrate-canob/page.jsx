import HighrateCanobKeywordPage, { generateMetadata } from './highrate-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobKeywordPage />;
}
