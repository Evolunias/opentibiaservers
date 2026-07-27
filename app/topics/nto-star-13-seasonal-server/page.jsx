import NtoStar13SeasonalServerKeywordPage, { generateMetadata } from './nto-star-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar13SeasonalServerKeywordPage />;
}
