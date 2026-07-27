import MadnessaliveChileServersKeywordPage, { generateMetadata } from './madnessalive-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveChileServersKeywordPage />;
}
