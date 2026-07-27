import SeasonalTibiaraServerKeywordPage, { generateMetadata } from './seasonal-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibiaraServerKeywordPage />;
}
