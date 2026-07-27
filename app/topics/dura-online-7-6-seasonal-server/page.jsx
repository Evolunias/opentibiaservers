import DuraOnline76SeasonalServerKeywordPage, { generateMetadata } from './dura-online-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline76SeasonalServerKeywordPage />;
}
