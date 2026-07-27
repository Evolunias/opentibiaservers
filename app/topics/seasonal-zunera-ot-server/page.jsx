import SeasonalZuneraOtServerKeywordPage, { generateMetadata } from './seasonal-zunera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalZuneraOtServerKeywordPage />;
}
