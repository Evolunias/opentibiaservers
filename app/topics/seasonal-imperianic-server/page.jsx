import SeasonalImperianicServerKeywordPage, { generateMetadata } from './seasonal-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalImperianicServerKeywordPage />;
}
