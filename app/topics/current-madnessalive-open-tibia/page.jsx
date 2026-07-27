import CurrentMadnessaliveOpenTibiaKeywordPage, { generateMetadata } from './current-madnessalive-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveOpenTibiaKeywordPage />;
}
