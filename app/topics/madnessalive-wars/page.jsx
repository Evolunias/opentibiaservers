import MadnessaliveWarsKeywordPage, { generateMetadata } from './madnessalive-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveWarsKeywordPage />;
}
