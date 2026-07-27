import Alastera772SeasonalServerKeywordPage, { generateMetadata } from './alastera-7-72-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera772SeasonalServerKeywordPage />;
}
