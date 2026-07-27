import DuraOnlineSeasonalServerArgentinaKeywordPage, { generateMetadata } from './dura-online-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerArgentinaKeywordPage />;
}
