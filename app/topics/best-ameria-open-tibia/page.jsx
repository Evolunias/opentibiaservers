import BestAmeriaOpenTibiaKeywordPage, { generateMetadata } from './best-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaOpenTibiaKeywordPage />;
}
