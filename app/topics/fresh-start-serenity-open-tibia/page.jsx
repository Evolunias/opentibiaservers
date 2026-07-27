import FreshStartSerenityOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-serenity-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityOpenTibiaKeywordPage />;
}
