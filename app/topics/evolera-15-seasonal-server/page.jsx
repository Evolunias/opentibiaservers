import Evolera15SeasonalServerKeywordPage, { generateMetadata } from './evolera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15SeasonalServerKeywordPage />;
}
