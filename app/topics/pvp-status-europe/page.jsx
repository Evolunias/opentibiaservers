import PvpStatusEuropeKeywordPage, { generateMetadata } from './pvp-status-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpStatusEuropeKeywordPage />;
}
