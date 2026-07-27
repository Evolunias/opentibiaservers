import CurrentTibijkaTibiaKeywordPage, { generateMetadata } from './current-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaTibiaKeywordPage />;
}
