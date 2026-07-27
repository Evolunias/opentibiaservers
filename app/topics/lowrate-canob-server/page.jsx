import LowrateCanobServerKeywordPage, { generateMetadata } from './lowrate-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobServerKeywordPage />;
}
