import CurrentYurotsOpenTibiaKeywordPage, { generateMetadata } from './current-yurots-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsOpenTibiaKeywordPage />;
}
