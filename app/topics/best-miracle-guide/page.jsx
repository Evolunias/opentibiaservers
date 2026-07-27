import BestMiracleGuideKeywordPage, { generateMetadata } from './best-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMiracleGuideKeywordPage />;
}
