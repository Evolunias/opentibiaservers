import MediviaPvpServerLatinAmericaKeywordPage, { generateMetadata } from './medivia-pvp-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpServerLatinAmericaKeywordPage />;
}
