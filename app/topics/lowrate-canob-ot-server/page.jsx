import LowrateCanobOtServerKeywordPage, { generateMetadata } from './lowrate-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobOtServerKeywordPage />;
}
