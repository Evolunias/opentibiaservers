import SeasonalClassickDrakoriaServerKeywordPage, { generateMetadata } from './seasonal-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClassickDrakoriaServerKeywordPage />;
}
