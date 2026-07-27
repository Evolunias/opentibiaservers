import Alastera80SeasonalServerKeywordPage, { generateMetadata } from './alastera-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80SeasonalServerKeywordPage />;
}
