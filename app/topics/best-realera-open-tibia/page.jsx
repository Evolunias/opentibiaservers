import BestRealeraOpenTibiaKeywordPage, { generateMetadata } from './best-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraOpenTibiaKeywordPage />;
}
