import NostaltherSeasonalServerUkKeywordPage, { generateMetadata } from './nostalther-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherSeasonalServerUkKeywordPage />;
}
