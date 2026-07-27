import NonPvpStatusSouthAmericaKeywordPage, { generateMetadata } from './non-pvp-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusSouthAmericaKeywordPage />;
}
