import CalmeraOtFranceServersKeywordPage, { generateMetadata } from './calmera-ot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtFranceServersKeywordPage />;
}
