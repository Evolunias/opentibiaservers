import DuraOnlineSeasonalServerFranceKeywordPage, { generateMetadata } from './dura-online-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerFranceKeywordPage />;
}
