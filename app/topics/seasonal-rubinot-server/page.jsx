import SeasonalRubinotServerKeywordPage, { generateMetadata } from './seasonal-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRubinotServerKeywordPage />;
}
