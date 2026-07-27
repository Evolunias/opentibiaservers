import SeasonalThaisotServerKeywordPage, { generateMetadata } from './seasonal-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalThaisotServerKeywordPage />;
}
