import BestTibijkaLoginKeywordPage, { generateMetadata } from './best-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaLoginKeywordPage />;
}
