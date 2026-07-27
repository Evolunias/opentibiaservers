import TibiameExpRateKeywordPage, { generateMetadata } from './tibiame-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameExpRateKeywordPage />;
}
