import ActiveRubinotServerKeywordPage, { generateMetadata } from './active-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotServerKeywordPage />;
}
