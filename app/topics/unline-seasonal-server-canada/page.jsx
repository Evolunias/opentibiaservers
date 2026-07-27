import UnlineSeasonalServerCanadaKeywordPage, { generateMetadata } from './unline-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSeasonalServerCanadaKeywordPage />;
}
