import BestRealestaGuideKeywordPage, { generateMetadata } from './best-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaGuideKeywordPage />;
}
