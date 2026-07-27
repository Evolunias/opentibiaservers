import NonPvpServerListNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServerListNorthAmericaKeywordPage />;
}
