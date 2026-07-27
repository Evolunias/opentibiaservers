import DuraOnlineSeasonalServerPolandKeywordPage, { generateMetadata } from './dura-online-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerPolandKeywordPage />;
}
