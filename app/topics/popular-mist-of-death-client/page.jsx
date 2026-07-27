import PopularMistOfDeathClientKeywordPage, { generateMetadata } from './popular-mist-of-death-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathClientKeywordPage />;
}
