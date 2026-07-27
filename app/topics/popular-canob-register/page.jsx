import PopularCanobRegisterKeywordPage, { generateMetadata } from './popular-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobRegisterKeywordPage />;
}
