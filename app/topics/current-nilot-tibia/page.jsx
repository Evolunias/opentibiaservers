import CurrentNilotTibiaKeywordPage, { generateMetadata } from './current-nilot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotTibiaKeywordPage />;
}
