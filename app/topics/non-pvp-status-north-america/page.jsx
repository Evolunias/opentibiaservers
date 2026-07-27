import NonPvpStatusNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusNorthAmericaKeywordPage />;
}
