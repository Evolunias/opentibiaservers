import BestRealestaOpenTibiaKeywordPage, { generateMetadata } from './best-realesta-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaOpenTibiaKeywordPage />;
}
