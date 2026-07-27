import MadnessaliveResetKeywordPage, { generateMetadata } from './madnessalive-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveResetKeywordPage />;
}
