import PopularMistOfDeathOfficialKeywordPage, { generateMetadata } from './popular-mist-of-death-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathOfficialKeywordPage />;
}
