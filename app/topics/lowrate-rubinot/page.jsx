import LowrateRubinotKeywordPage, { generateMetadata } from './lowrate-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotKeywordPage />;
}
