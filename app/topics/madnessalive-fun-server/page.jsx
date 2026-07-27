import MadnessaliveFunServerKeywordPage, { generateMetadata } from './madnessalive-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveFunServerKeywordPage />;
}
