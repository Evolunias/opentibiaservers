import NostaltherExpRateKeywordPage, { generateMetadata } from './nostalther-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherExpRateKeywordPage />;
}
