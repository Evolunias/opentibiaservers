import CurrentMadnessaliveTibiaKeywordPage, { generateMetadata } from './current-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveTibiaKeywordPage />;
}
