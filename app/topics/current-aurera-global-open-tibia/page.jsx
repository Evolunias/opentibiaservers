import CurrentAureraGlobalOpenTibiaKeywordPage, { generateMetadata } from './current-aurera-global-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalOpenTibiaKeywordPage />;
}
