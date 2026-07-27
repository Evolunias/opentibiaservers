import NtoStar76SeasonalServerKeywordPage, { generateMetadata } from './nto-star-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar76SeasonalServerKeywordPage />;
}
