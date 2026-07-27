import MediviaBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './medivia-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBaiakServerLatinAmericaKeywordPage />;
}
