import NonPvpThaisotServerKeywordPage, { generateMetadata } from './non-pvp-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpThaisotServerKeywordPage />;
}
