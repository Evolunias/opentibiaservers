import NtoStar84SeasonalServerKeywordPage, { generateMetadata } from './nto-star-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar84SeasonalServerKeywordPage />;
}
