import EvoMadnessaliveServerKeywordPage, { generateMetadata } from './evo-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMadnessaliveServerKeywordPage />;
}
