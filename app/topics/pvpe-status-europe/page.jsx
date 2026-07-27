import PvpeStatusEuropeKeywordPage, { generateMetadata } from './pvpe-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeStatusEuropeKeywordPage />;
}
