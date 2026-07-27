import LowExpMadnessaliveServerKeywordPage, { generateMetadata } from './low-exp-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpMadnessaliveServerKeywordPage />;
}
