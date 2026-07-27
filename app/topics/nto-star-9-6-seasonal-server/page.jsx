import NtoStar96SeasonalServerKeywordPage, { generateMetadata } from './nto-star-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar96SeasonalServerKeywordPage />;
}
