import NonPvpCarlinotServerKeywordPage, { generateMetadata } from './non-pvp-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpCarlinotServerKeywordPage />;
}
