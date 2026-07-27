import LowrateMadnessaliveKeywordPage, { generateMetadata } from './lowrate-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMadnessaliveKeywordPage />;
}
