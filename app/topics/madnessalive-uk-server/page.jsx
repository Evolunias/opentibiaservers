import MadnessaliveUkServerKeywordPage, { generateMetadata } from './madnessalive-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveUkServerKeywordPage />;
}
