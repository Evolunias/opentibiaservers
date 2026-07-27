import CalmeraOtFranceServerKeywordPage, { generateMetadata } from './calmera-ot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtFranceServerKeywordPage />;
}
