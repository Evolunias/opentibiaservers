import BestZezeniaOnlineGuideKeywordPage, { generateMetadata } from './best-zezenia-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineGuideKeywordPage />;
}
