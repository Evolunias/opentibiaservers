import NewSerenityOpenTibiaKeywordPage, { generateMetadata } from './new-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityOpenTibiaKeywordPage />;
}
