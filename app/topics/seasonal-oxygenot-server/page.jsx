import SeasonalOxygenotServerKeywordPage, { generateMetadata } from './seasonal-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOxygenotServerKeywordPage />;
}
