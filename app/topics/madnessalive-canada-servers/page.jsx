import MadnessaliveCanadaServersKeywordPage, { generateMetadata } from './madnessalive-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveCanadaServersKeywordPage />;
}
