import HighrateSerenityOpenTibiaKeywordPage, { generateMetadata } from './highrate-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityOpenTibiaKeywordPage />;
}
