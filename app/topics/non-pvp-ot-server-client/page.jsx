import NonPvpOtServerClientKeywordPage, { generateMetadata } from './non-pvp-ot-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerClientKeywordPage />;
}
