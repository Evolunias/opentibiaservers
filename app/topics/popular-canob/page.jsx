import PopularCanobKeywordPage, { generateMetadata } from './popular-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobKeywordPage />;
}
