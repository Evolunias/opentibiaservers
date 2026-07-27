import MediviaPvpeServerUsaKeywordPage, { generateMetadata } from './medivia-pvpe-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpeServerUsaKeywordPage />;
}
