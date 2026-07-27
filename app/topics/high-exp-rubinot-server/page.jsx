import HighExpRubinotServerKeywordPage, { generateMetadata } from './high-exp-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRubinotServerKeywordPage />;
}
