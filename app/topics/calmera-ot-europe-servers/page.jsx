import CalmeraOtEuropeServersKeywordPage, { generateMetadata } from './calmera-ot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtEuropeServersKeywordPage />;
}
