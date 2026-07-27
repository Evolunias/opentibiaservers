import LowrateCanobOtsKeywordPage, { generateMetadata } from './lowrate-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobOtsKeywordPage />;
}
