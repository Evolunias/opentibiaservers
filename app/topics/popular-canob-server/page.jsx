import PopularCanobServerKeywordPage, { generateMetadata } from './popular-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobServerKeywordPage />;
}
