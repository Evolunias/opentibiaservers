import CurrentMadnessaliveOtsKeywordPage, { generateMetadata } from './current-madnessalive-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveOtsKeywordPage />;
}
