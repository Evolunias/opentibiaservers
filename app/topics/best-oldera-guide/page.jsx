import BestOlderaGuideKeywordPage, { generateMetadata } from './best-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOlderaGuideKeywordPage />;
}
