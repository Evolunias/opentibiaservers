import MadnessaliveSwedenServersKeywordPage, { generateMetadata } from './madnessalive-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveSwedenServersKeywordPage />;
}
