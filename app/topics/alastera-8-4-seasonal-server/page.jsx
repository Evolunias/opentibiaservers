import Alastera84SeasonalServerKeywordPage, { generateMetadata } from './alastera-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84SeasonalServerKeywordPage />;
}
