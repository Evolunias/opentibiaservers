import NtoStar100SeasonalServerKeywordPage, { generateMetadata } from './nto-star-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar100SeasonalServerKeywordPage />;
}
