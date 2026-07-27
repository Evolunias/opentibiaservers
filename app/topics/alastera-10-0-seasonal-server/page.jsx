import Alastera100SeasonalServerKeywordPage, { generateMetadata } from './alastera-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera100SeasonalServerKeywordPage />;
}
