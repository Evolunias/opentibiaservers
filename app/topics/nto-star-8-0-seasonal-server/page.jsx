import NtoStar80SeasonalServerKeywordPage, { generateMetadata } from './nto-star-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar80SeasonalServerKeywordPage />;
}
