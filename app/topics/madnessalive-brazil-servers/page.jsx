import MadnessaliveBrazilServersKeywordPage, { generateMetadata } from './madnessalive-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveBrazilServersKeywordPage />;
}
