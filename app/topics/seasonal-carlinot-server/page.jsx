import SeasonalCarlinotServerKeywordPage, { generateMetadata } from './seasonal-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalCarlinotServerKeywordPage />;
}
