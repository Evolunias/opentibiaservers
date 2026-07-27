import Thaisot76SeasonalServerKeywordPage, { generateMetadata } from './thaisot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot76SeasonalServerKeywordPage />;
}
