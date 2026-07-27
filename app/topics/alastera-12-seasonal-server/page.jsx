import Alastera12SeasonalServerKeywordPage, { generateMetadata } from './alastera-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12SeasonalServerKeywordPage />;
}
