import RubinotEuropeServersKeywordPage, { generateMetadata } from './rubinot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEuropeServersKeywordPage />;
}
