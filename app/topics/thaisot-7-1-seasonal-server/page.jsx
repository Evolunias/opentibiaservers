import Thaisot71SeasonalServerKeywordPage, { generateMetadata } from './thaisot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71SeasonalServerKeywordPage />;
}
