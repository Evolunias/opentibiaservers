import SeasonalUnlineServerKeywordPage, { generateMetadata } from './seasonal-unline-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalUnlineServerKeywordPage />;
}
