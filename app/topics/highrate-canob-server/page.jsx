import HighrateCanobServerKeywordPage, { generateMetadata } from './highrate-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobServerKeywordPage />;
}
