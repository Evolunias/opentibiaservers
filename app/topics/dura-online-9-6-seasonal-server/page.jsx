import DuraOnline96SeasonalServerKeywordPage, { generateMetadata } from './dura-online-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline96SeasonalServerKeywordPage />;
}
