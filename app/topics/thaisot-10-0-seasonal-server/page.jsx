import Thaisot100SeasonalServerKeywordPage, { generateMetadata } from './thaisot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot100SeasonalServerKeywordPage />;
}
