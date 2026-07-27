import SeasonalServersEuropeKeywordPage, { generateMetadata } from './seasonal-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersEuropeKeywordPage />;
}
