import CurrentMadnessaliveServerKeywordPage, { generateMetadata } from './current-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveServerKeywordPage />;
}
