import NonPvpOlderaServerKeywordPage, { generateMetadata } from './non-pvp-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOlderaServerKeywordPage />;
}
