import BestTibianusKeywordPage, { generateMetadata } from './best-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusKeywordPage />;
}
