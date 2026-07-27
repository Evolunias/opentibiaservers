import NtoStar86SeasonalServerKeywordPage, { generateMetadata } from './nto-star-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar86SeasonalServerKeywordPage />;
}
