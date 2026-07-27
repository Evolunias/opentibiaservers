import RubinotRealMapServerGermanyKeywordPage, { generateMetadata } from './rubinot-real-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotRealMapServerGermanyKeywordPage />;
}
