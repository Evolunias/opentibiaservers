import CurrentSerenityTibiaKeywordPage, { generateMetadata } from './current-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityTibiaKeywordPage />;
}
