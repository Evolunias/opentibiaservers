import DuraOnlineSeasonalServerBrazilKeywordPage, { generateMetadata } from './dura-online-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerBrazilKeywordPage />;
}
