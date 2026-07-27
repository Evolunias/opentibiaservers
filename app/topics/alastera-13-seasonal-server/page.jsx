import Alastera13SeasonalServerKeywordPage, { generateMetadata } from './alastera-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13SeasonalServerKeywordPage />;
}
