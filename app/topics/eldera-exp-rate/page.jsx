import ElderaExpRateKeywordPage, { generateMetadata } from './eldera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaExpRateKeywordPage />;
}
