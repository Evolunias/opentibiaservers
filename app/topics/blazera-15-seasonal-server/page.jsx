import Blazera15SeasonalServerKeywordPage, { generateMetadata } from './blazera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15SeasonalServerKeywordPage />;
}
