import MadnessaliveLoginKeywordPage, { generateMetadata } from './madnessalive-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveLoginKeywordPage />;
}
