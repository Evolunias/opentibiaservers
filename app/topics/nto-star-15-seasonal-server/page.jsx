import NtoStar15SeasonalServerKeywordPage, { generateMetadata } from './nto-star-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStar15SeasonalServerKeywordPage />;
}
