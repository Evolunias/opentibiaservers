import MediviaPvpServerUsaKeywordPage, { generateMetadata } from './medivia-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpServerUsaKeywordPage />;
}
