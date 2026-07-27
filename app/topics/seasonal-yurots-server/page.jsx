import SeasonalYurotsServerKeywordPage, { generateMetadata } from './seasonal-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalYurotsServerKeywordPage />;
}
