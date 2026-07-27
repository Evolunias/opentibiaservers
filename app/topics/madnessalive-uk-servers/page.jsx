import MadnessaliveUkServersKeywordPage, { generateMetadata } from './madnessalive-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveUkServersKeywordPage />;
}
