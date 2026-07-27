import NtoStar74SeasonalServerKeywordPage, { generateMetadata } from './nto-star-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar74SeasonalServerKeywordPage />;
}
