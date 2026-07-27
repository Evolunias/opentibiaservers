import NtoStar12SeasonalServerKeywordPage, { generateMetadata } from './nto-star-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar12SeasonalServerKeywordPage />;
}
