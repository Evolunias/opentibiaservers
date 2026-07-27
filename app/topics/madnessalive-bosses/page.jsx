import MadnessaliveBossesKeywordPage, { generateMetadata } from './madnessalive-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveBossesKeywordPage />;
}
