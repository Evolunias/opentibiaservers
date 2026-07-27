import AlasteraExpRateKeywordPage, { generateMetadata } from './alastera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraExpRateKeywordPage />;
}
