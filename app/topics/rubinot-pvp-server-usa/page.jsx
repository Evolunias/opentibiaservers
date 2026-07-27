import RubinotPvpServerUsaKeywordPage, { generateMetadata } from './rubinot-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPvpServerUsaKeywordPage />;
}
