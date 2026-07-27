import MediviaPvpeServerFranceKeywordPage, { generateMetadata } from './medivia-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpeServerFranceKeywordPage />;
}
