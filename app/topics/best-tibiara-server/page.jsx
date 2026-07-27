import BestTibiaraServerKeywordPage, { generateMetadata } from './best-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraServerKeywordPage />;
}
