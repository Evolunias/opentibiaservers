import MadnessalivePvpeKeywordPage, { generateMetadata } from './madnessalive-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessalivePvpeKeywordPage />;
}
