import HighrateMadnessaliveTibiaKeywordPage, { generateMetadata } from './highrate-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMadnessaliveTibiaKeywordPage />;
}
