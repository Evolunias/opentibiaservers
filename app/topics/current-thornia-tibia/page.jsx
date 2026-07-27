import CurrentThorniaTibiaKeywordPage, { generateMetadata } from './current-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaTibiaKeywordPage />;
}
