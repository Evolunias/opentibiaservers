import MadnessalivePolandServerKeywordPage, { generateMetadata } from './madnessalive-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessalivePolandServerKeywordPage />;
}
