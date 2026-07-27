import PopularCanobTibiaKeywordPage, { generateMetadata } from './popular-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobTibiaKeywordPage />;
}
