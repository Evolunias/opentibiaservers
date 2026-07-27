import SerenityExpRateKeywordPage, { generateMetadata } from './serenity-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityExpRateKeywordPage />;
}
