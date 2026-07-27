import ElderaSeasonalServerPolandKeywordPage, { generateMetadata } from './eldera-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSeasonalServerPolandKeywordPage />;
}
