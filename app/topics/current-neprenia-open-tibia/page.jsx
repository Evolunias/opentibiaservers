import CurrentNepreniaOpenTibiaKeywordPage, { generateMetadata } from './current-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaOpenTibiaKeywordPage />;
}
