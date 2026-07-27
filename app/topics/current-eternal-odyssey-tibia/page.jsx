import CurrentEternalOdysseyTibiaKeywordPage, { generateMetadata } from './current-eternal-odyssey-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyTibiaKeywordPage />;
}
