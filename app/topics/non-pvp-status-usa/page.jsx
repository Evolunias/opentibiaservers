import NonPvpStatusUsaKeywordPage, { generateMetadata } from './non-pvp-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpStatusUsaKeywordPage />;
}
