import HighrateMadnessaliveServerKeywordPage, { generateMetadata } from './highrate-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMadnessaliveServerKeywordPage />;
}
