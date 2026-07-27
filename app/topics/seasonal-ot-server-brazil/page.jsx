import SeasonalOtServerBrazilKeywordPage, { generateMetadata } from './seasonal-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOtServerBrazilKeywordPage />;
}
