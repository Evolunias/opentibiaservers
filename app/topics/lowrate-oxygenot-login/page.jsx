import LowrateOxygenotLoginKeywordPage, { generateMetadata } from './lowrate-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotLoginKeywordPage />;
}
