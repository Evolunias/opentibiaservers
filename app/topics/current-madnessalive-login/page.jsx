import CurrentMadnessaliveLoginKeywordPage, { generateMetadata } from './current-madnessalive-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveLoginKeywordPage />;
}
