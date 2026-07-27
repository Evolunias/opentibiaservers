import DuraOnline86SeasonalServerKeywordPage, { generateMetadata } from './dura-online-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline86SeasonalServerKeywordPage />;
}
