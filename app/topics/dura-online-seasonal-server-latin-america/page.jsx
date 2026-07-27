import DuraOnlineSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './dura-online-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSeasonalServerLatinAmericaKeywordPage />;
}
