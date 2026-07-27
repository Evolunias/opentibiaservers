import CurrentUnlineOpenTibiaKeywordPage, { generateMetadata } from './current-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineOpenTibiaKeywordPage />;
}
