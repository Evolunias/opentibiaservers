import UnlineSeasonalServerUkKeywordPage, { generateMetadata } from './unline-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSeasonalServerUkKeywordPage />;
}
