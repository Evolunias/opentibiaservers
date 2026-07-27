import CalmeraOtMarketKeywordPage, { generateMetadata } from './calmera-ot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtMarketKeywordPage />;
}
