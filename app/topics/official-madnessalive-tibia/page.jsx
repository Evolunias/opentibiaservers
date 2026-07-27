import OfficialMadnessaliveTibiaKeywordPage, { generateMetadata } from './official-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveTibiaKeywordPage />;
}
