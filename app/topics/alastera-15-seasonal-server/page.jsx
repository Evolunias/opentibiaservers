import Alastera15SeasonalServerKeywordPage, { generateMetadata } from './alastera-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15SeasonalServerKeywordPage />;
}
