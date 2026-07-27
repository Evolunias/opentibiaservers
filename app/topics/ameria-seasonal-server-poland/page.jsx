import AmeriaSeasonalServerPolandKeywordPage, { generateMetadata } from './ameria-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerPolandKeywordPage />;
}
