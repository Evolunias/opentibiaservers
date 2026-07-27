import MadnessaliveSimilarServersKeywordPage, { generateMetadata } from './madnessalive-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveSimilarServersKeywordPage />;
}
