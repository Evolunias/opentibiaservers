import LowrateRubinotServerKeywordPage, { generateMetadata } from './lowrate-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotServerKeywordPage />;
}
