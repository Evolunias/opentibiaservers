import MadnessaliveCanadaServerKeywordPage, { generateMetadata } from './madnessalive-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveCanadaServerKeywordPage />;
}
