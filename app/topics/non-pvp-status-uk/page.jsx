import NonPvpStatusUkKeywordPage, { generateMetadata } from './non-pvp-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusUkKeywordPage />;
}
