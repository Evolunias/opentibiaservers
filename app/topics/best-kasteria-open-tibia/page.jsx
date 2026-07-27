import BestKasteriaOpenTibiaKeywordPage, { generateMetadata } from './best-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaOpenTibiaKeywordPage />;
}
