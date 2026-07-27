import Alastera96SeasonalServerKeywordPage, { generateMetadata } from './alastera-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96SeasonalServerKeywordPage />;
}
