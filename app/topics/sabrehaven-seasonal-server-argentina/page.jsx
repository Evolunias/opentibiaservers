import SabrehavenSeasonalServerArgentinaKeywordPage, { generateMetadata } from './sabrehaven-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSeasonalServerArgentinaKeywordPage />;
}
