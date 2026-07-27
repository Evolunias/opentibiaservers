import SeasonalClientMexicoKeywordPage, { generateMetadata } from './seasonal-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientMexicoKeywordPage />;
}
