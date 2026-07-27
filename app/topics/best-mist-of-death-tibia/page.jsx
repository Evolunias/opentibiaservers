import BestMistOfDeathTibiaKeywordPage, { generateMetadata } from './best-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMistOfDeathTibiaKeywordPage />;
}
