import MediviaPvpeServerMexicoKeywordPage, { generateMetadata } from './medivia-pvpe-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpeServerMexicoKeywordPage />;
}
