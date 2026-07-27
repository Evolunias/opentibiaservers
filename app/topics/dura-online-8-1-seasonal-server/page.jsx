import DuraOnline81SeasonalServerKeywordPage, { generateMetadata } from './dura-online-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline81SeasonalServerKeywordPage />;
}
