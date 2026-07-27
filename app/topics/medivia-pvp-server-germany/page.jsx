import MediviaPvpServerGermanyKeywordPage, { generateMetadata } from './medivia-pvp-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpServerGermanyKeywordPage />;
}
