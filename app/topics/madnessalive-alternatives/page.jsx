import MadnessaliveAlternativesKeywordPage, { generateMetadata } from './madnessalive-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveAlternativesKeywordPage />;
}
