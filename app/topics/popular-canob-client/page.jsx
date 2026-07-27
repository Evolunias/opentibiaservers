import PopularCanobClientKeywordPage, { generateMetadata } from './popular-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobClientKeywordPage />;
}
