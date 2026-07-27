import NtoStar14SeasonalServerKeywordPage, { generateMetadata } from './nto-star-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar14SeasonalServerKeywordPage />;
}
