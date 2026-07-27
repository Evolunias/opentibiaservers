import BestNtoStarTibiaKeywordPage, { generateMetadata } from './best-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNtoStarTibiaKeywordPage />;
}
