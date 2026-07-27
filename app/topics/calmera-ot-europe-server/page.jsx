import CalmeraOtEuropeServerKeywordPage, { generateMetadata } from './calmera-ot-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtEuropeServerKeywordPage />;
}
