import RubinotPvpeServerUkKeywordPage, { generateMetadata } from './rubinot-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpeServerUkKeywordPage />;
}
