import MadnessalivePolandServersKeywordPage, { generateMetadata } from './madnessalive-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessalivePolandServersKeywordPage />;
}
