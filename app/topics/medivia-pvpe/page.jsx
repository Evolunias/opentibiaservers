import MediviaPvpeKeywordPage, { generateMetadata } from './medivia-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpeKeywordPage />;
}
