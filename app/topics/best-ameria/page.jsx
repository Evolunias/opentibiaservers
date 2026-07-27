import BestAmeriaKeywordPage, { generateMetadata } from './best-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaKeywordPage />;
}
