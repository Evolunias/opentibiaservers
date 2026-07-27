import MadnessaliveMexicoServerKeywordPage, { generateMetadata } from './madnessalive-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveMexicoServerKeywordPage />;
}
