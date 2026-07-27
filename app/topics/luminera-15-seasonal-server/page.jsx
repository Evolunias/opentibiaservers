import Luminera15SeasonalServerKeywordPage, { generateMetadata } from './luminera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15SeasonalServerKeywordPage />;
}
