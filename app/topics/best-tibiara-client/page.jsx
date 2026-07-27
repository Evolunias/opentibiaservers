import BestTibiaraClientKeywordPage, { generateMetadata } from './best-tibiara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraClientKeywordPage />;
}
