import HighrateCanobOtServerKeywordPage, { generateMetadata } from './highrate-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOtServerKeywordPage />;
}
