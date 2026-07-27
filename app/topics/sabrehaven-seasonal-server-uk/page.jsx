import SabrehavenSeasonalServerUkKeywordPage, { generateMetadata } from './sabrehaven-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSeasonalServerUkKeywordPage />;
}
