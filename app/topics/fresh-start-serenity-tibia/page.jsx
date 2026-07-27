import FreshStartSerenityTibiaKeywordPage, { generateMetadata } from './fresh-start-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityTibiaKeywordPage />;
}
