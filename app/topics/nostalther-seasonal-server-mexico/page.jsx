import NostaltherSeasonalServerMexicoKeywordPage, { generateMetadata } from './nostalther-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherSeasonalServerMexicoKeywordPage />;
}
