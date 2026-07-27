import DemolidoresExpRateKeywordPage, { generateMetadata } from './demolidores-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresExpRateKeywordPage />;
}
