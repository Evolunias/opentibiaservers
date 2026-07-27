import EvoRubinotServerKeywordPage, { generateMetadata } from './evo-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRubinotServerKeywordPage />;
}
