import MadnessaliveFranceServerKeywordPage, { generateMetadata } from './madnessalive-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveFranceServerKeywordPage />;
}
