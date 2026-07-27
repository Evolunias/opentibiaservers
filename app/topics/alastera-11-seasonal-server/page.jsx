import Alastera11SeasonalServerKeywordPage, { generateMetadata } from './alastera-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11SeasonalServerKeywordPage />;
}
