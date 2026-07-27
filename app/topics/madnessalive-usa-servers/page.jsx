import MadnessaliveUsaServersKeywordPage, { generateMetadata } from './madnessalive-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveUsaServersKeywordPage />;
}
