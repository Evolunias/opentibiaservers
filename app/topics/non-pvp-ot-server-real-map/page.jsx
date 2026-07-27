import NonPvpOtServerRealMapKeywordPage, { generateMetadata } from './non-pvp-ot-server-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerRealMapKeywordPage />;
}
