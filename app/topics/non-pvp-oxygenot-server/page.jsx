import NonPvpOxygenotServerKeywordPage, { generateMetadata } from './non-pvp-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOxygenotServerKeywordPage />;
}
