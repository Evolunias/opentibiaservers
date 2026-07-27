import PopularCanobOtsKeywordPage, { generateMetadata } from './popular-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobOtsKeywordPage />;
}
