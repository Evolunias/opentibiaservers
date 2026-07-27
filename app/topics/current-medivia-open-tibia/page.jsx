import CurrentMediviaOpenTibiaKeywordPage, { generateMetadata } from './current-medivia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaOpenTibiaKeywordPage />;
}
