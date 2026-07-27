import MediviaBaiakServerUkKeywordPage, { generateMetadata } from './medivia-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBaiakServerUkKeywordPage />;
}
