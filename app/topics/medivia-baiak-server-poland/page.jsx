import MediviaBaiakServerPolandKeywordPage, { generateMetadata } from './medivia-baiak-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBaiakServerPolandKeywordPage />;
}
