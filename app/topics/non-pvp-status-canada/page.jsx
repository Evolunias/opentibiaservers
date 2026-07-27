import NonPvpStatusCanadaKeywordPage, { generateMetadata } from './non-pvp-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusCanadaKeywordPage />;
}
