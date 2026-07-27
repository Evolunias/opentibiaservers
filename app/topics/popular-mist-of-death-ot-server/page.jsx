import PopularMistOfDeathOtServerKeywordPage, { generateMetadata } from './popular-mist-of-death-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathOtServerKeywordPage />;
}
