import DuraOnline15SeasonalServerKeywordPage, { generateMetadata } from './dura-online-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15SeasonalServerKeywordPage />;
}
