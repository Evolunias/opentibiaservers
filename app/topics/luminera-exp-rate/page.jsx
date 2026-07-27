import LumineraExpRateKeywordPage, { generateMetadata } from './luminera-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraExpRateKeywordPage />;
}
