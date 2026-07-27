import ActiveRubinotOtServerKeywordPage, { generateMetadata } from './active-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRubinotOtServerKeywordPage />;
}
