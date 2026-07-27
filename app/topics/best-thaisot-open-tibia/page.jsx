import BestThaisotOpenTibiaKeywordPage, { generateMetadata } from './best-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThaisotOpenTibiaKeywordPage />;
}
