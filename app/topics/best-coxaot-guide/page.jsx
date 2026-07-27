import BestCoxaotGuideKeywordPage, { generateMetadata } from './best-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotGuideKeywordPage />;
}
