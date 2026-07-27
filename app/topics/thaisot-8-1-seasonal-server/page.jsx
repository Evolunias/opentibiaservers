import Thaisot81SeasonalServerKeywordPage, { generateMetadata } from './thaisot-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81SeasonalServerKeywordPage />;
}
