import Luminera96SeasonalServerKeywordPage, { generateMetadata } from './luminera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96SeasonalServerKeywordPage />;
}
