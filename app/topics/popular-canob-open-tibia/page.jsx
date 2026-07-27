import PopularCanobOpenTibiaKeywordPage, { generateMetadata } from './popular-canob-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobOpenTibiaKeywordPage />;
}
