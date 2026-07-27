import DuraOnline13SeasonalServerKeywordPage, { generateMetadata } from './dura-online-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13SeasonalServerKeywordPage />;
}
