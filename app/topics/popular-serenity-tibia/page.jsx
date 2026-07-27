import PopularSerenityTibiaKeywordPage, { generateMetadata } from './popular-serenity-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityTibiaKeywordPage />;
}
