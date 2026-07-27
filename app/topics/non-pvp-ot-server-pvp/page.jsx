import NonPvpOtServerPvpKeywordPage, { generateMetadata } from './non-pvp-ot-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerPvpKeywordPage />;
}
