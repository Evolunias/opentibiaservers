import MediviaPvpServerFranceKeywordPage, { generateMetadata } from './medivia-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaPvpServerFranceKeywordPage />;
}
