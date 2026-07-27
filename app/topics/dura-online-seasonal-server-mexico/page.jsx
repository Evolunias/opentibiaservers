import DuraOnlineSeasonalServerMexicoKeywordPage, { generateMetadata } from './dura-online-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerMexicoKeywordPage />;
}
