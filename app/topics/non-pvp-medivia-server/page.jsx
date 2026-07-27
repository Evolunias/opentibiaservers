import NonPvpMediviaServerKeywordPage, { generateMetadata } from './non-pvp-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpMediviaServerKeywordPage />;
}
