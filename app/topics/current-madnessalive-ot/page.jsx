import CurrentMadnessaliveOtKeywordPage, { generateMetadata } from './current-madnessalive-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveOtKeywordPage />;
}
