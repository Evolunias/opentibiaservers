import MediviaBaiakServerUsaKeywordPage, { generateMetadata } from './medivia-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaBaiakServerUsaKeywordPage />;
}
