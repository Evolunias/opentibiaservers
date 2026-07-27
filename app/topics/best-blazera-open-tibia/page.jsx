import BestBlazeraOpenTibiaKeywordPage, { generateMetadata } from './best-blazera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraOpenTibiaKeywordPage />;
}
