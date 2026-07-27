import RubinotPvpKeywordPage, { generateMetadata } from './rubinot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpKeywordPage />;
}
