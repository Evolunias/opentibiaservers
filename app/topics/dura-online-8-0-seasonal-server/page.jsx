import DuraOnline80SeasonalServerKeywordPage, { generateMetadata } from './dura-online-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline80SeasonalServerKeywordPage />;
}
