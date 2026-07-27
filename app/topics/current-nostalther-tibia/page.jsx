import CurrentNostaltherTibiaKeywordPage, { generateMetadata } from './current-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherTibiaKeywordPage />;
}
