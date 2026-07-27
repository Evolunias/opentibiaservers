import ElderaSeasonalServerUsaKeywordPage, { generateMetadata } from './eldera-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSeasonalServerUsaKeywordPage />;
}
