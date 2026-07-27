import PopularTibijkaOpenTibiaKeywordPage, { generateMetadata } from './popular-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaOpenTibiaKeywordPage />;
}
