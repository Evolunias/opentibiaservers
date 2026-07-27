import CurrentMistOfDeathOpenTibiaKeywordPage, { generateMetadata } from './current-mist-of-death-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMistOfDeathOpenTibiaKeywordPage />;
}
