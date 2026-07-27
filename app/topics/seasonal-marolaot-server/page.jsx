import SeasonalMarolaotServerKeywordPage, { generateMetadata } from './seasonal-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalMarolaotServerKeywordPage />;
}
