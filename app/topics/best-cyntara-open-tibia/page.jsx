import BestCyntaraOpenTibiaKeywordPage, { generateMetadata } from './best-cyntara-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCyntaraOpenTibiaKeywordPage />;
}
