import MadnessaliveUsaServerKeywordPage, { generateMetadata } from './madnessalive-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveUsaServerKeywordPage />;
}
