import WithReviewsEmpirebrTibiaKeywordPage, { generateMetadata } from './with-reviews-empirebr-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsEmpirebrTibiaKeywordPage />;
}
