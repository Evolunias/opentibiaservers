import HighrateCanobOtKeywordPage, { generateMetadata } from './highrate-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobOtKeywordPage />;
}
