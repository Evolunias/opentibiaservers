import CurrentMadnessaliveKeywordPage, { generateMetadata } from './current-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveKeywordPage />;
}
