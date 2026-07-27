import CurrentNostaltherOpenTibiaKeywordPage, { generateMetadata } from './current-nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherOpenTibiaKeywordPage />;
}
