import SeasonalMediviaServerKeywordPage, { generateMetadata } from './seasonal-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalMediviaServerKeywordPage />;
}
