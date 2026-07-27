import DuraOnlineSeasonalServerUsaKeywordPage, { generateMetadata } from './dura-online-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerUsaKeywordPage />;
}
