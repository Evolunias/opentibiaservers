import RubinotPvpServerEuropeKeywordPage, { generateMetadata } from './rubinot-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpServerEuropeKeywordPage />;
}
