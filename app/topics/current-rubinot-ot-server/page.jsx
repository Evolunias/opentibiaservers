import CurrentRubinotOtServerKeywordPage, { generateMetadata } from './current-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotOtServerKeywordPage />;
}
