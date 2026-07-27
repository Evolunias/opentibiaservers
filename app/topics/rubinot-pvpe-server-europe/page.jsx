import RubinotPvpeServerEuropeKeywordPage, { generateMetadata } from './rubinot-pvpe-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpeServerEuropeKeywordPage />;
}
