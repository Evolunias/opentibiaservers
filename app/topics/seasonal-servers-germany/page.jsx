import SeasonalServersGermanyKeywordPage, { generateMetadata } from './seasonal-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersGermanyKeywordPage />;
}
