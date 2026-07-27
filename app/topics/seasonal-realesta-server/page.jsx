import SeasonalRealestaServerKeywordPage, { generateMetadata } from './seasonal-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalRealestaServerKeywordPage />;
}
