import BestRealeraGuideKeywordPage, { generateMetadata } from './best-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraGuideKeywordPage />;
}
