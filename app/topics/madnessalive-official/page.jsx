import MadnessaliveOfficialKeywordPage, { generateMetadata } from './madnessalive-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveOfficialKeywordPage />;
}
