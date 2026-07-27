import NtoStarExpRateKeywordPage, { generateMetadata } from './nto-star-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarExpRateKeywordPage />;
}
