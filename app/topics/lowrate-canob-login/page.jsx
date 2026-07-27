import LowrateCanobLoginKeywordPage, { generateMetadata } from './lowrate-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCanobLoginKeywordPage />;
}
