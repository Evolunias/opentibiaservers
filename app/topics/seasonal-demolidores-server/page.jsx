import SeasonalDemolidoresServerKeywordPage, { generateMetadata } from './seasonal-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalDemolidoresServerKeywordPage />;
}
