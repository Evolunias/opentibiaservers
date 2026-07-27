import Thaisot84SeasonalServerKeywordPage, { generateMetadata } from './thaisot-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot84SeasonalServerKeywordPage />;
}
