import NonPvpStatusPolandKeywordPage, { generateMetadata } from './non-pvp-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusPolandKeywordPage />;
}
