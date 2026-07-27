import BestMyaacKeywordPage, { generateMetadata } from './best-myaac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMyaacKeywordPage />;
}
