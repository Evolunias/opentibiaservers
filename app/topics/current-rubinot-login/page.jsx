import CurrentRubinotLoginKeywordPage, { generateMetadata } from './current-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotLoginKeywordPage />;
}
