import MadnessaliveOtServerKeywordPage, { generateMetadata } from './madnessalive-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveOtServerKeywordPage />;
}
