import CurrentDemolidoresOpenTibiaKeywordPage, { generateMetadata } from './current-demolidores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresOpenTibiaKeywordPage />;
}
