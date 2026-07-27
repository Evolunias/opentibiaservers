import NonPvpServerListUsaKeywordPage, { generateMetadata } from './non-pvp-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListUsaKeywordPage />;
}
