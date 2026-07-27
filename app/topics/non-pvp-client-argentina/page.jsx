import NonPvpClientArgentinaKeywordPage, { generateMetadata } from './non-pvp-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientArgentinaKeywordPage />;
}
