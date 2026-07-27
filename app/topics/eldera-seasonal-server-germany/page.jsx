import ElderaSeasonalServerGermanyKeywordPage, { generateMetadata } from './eldera-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSeasonalServerGermanyKeywordPage />;
}
