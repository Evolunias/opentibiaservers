import CurrentNilotOpenTibiaKeywordPage, { generateMetadata } from './current-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotOpenTibiaKeywordPage />;
}
