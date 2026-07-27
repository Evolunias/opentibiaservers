import CurrentRealeraOpenTibiaKeywordPage, { generateMetadata } from './current-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraOpenTibiaKeywordPage />;
}
