import Medivia74SeasonalServerKeywordPage, { generateMetadata } from './medivia-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia74SeasonalServerKeywordPage />;
}
