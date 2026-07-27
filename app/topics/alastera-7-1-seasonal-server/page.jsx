import Alastera71SeasonalServerKeywordPage, { generateMetadata } from './alastera-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71SeasonalServerKeywordPage />;
}
