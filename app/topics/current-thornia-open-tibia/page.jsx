import CurrentThorniaOpenTibiaKeywordPage, { generateMetadata } from './current-thornia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaOpenTibiaKeywordPage />;
}
