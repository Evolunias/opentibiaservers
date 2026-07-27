import CurrentBlazeraOpenTibiaKeywordPage, { generateMetadata } from './current-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraOpenTibiaKeywordPage />;
}
