import RubinotEuropeServerKeywordPage, { generateMetadata } from './rubinot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEuropeServerKeywordPage />;
}
