import CurrentOxygenotOpenTibiaKeywordPage, { generateMetadata } from './current-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOxygenotOpenTibiaKeywordPage />;
}
