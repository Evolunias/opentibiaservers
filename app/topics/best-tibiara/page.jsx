import BestTibiaraKeywordPage, { generateMetadata } from './best-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraKeywordPage />;
}
