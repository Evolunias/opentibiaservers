import CurrentSerenityOpenTibiaKeywordPage, { generateMetadata } from './current-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityOpenTibiaKeywordPage />;
}
