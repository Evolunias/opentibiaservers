import Thaisot74SeasonalServerKeywordPage, { generateMetadata } from './thaisot-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot74SeasonalServerKeywordPage />;
}
