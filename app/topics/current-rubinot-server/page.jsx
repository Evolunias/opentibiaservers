import CurrentRubinotServerKeywordPage, { generateMetadata } from './current-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotServerKeywordPage />;
}
