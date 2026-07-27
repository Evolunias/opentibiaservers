import SeasonalTibijkaServerKeywordPage, { generateMetadata } from './seasonal-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibijkaServerKeywordPage />;
}
