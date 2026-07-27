import DuraOnline71SeasonalServerKeywordPage, { generateMetadata } from './dura-online-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline71SeasonalServerKeywordPage />;
}
