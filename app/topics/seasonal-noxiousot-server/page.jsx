import SeasonalNoxiousotServerKeywordPage, { generateMetadata } from './seasonal-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalNoxiousotServerKeywordPage />;
}
