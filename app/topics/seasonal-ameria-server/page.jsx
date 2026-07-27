import SeasonalAmeriaServerKeywordPage, { generateMetadata } from './seasonal-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalAmeriaServerKeywordPage />;
}
