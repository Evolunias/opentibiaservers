import MadnessaliveSwedenServerKeywordPage, { generateMetadata } from './madnessalive-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveSwedenServerKeywordPage />;
}
