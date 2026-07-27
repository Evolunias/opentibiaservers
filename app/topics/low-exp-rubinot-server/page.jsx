import LowExpRubinotServerKeywordPage, { generateMetadata } from './low-exp-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpRubinotServerKeywordPage />;
}
