import NonPvpRubinotServerKeywordPage, { generateMetadata } from './non-pvp-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRubinotServerKeywordPage />;
}
