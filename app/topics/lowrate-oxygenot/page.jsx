import LowrateOxygenotKeywordPage, { generateMetadata } from './lowrate-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOxygenotKeywordPage />;
}
