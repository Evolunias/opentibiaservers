import PopularMistOfDeathKeywordPage, { generateMetadata } from './popular-mist-of-death';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathKeywordPage />;
}
