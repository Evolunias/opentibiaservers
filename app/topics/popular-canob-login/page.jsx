import PopularCanobLoginKeywordPage, { generateMetadata } from './popular-canob-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobLoginKeywordPage />;
}
