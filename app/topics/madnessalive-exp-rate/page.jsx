import MadnessaliveExpRateKeywordPage, { generateMetadata } from './madnessalive-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveExpRateKeywordPage />;
}
