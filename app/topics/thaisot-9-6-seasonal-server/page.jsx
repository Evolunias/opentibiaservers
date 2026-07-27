import Thaisot96SeasonalServerKeywordPage, { generateMetadata } from './thaisot-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96SeasonalServerKeywordPage />;
}
