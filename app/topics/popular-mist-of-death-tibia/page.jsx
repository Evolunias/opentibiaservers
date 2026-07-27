import PopularMistOfDeathTibiaKeywordPage, { generateMetadata } from './popular-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathTibiaKeywordPage />;
}
