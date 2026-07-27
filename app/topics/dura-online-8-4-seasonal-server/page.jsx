import DuraOnline84SeasonalServerKeywordPage, { generateMetadata } from './dura-online-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline84SeasonalServerKeywordPage />;
}
