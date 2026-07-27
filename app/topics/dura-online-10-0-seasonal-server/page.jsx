import DuraOnline100SeasonalServerKeywordPage, { generateMetadata } from './dura-online-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline100SeasonalServerKeywordPage />;
}
