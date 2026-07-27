import SeasonalBlazeraServerKeywordPage, { generateMetadata } from './seasonal-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalBlazeraServerKeywordPage />;
}
