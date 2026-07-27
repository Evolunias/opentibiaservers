import LowrateMadnessaliveServerKeywordPage, { generateMetadata } from './lowrate-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMadnessaliveServerKeywordPage />;
}
