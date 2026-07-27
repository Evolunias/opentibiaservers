import CurrentRubinotOtKeywordPage, { generateMetadata } from './current-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotOtKeywordPage />;
}
