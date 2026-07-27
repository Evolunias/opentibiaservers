import SeasonalOpenTibiaServerNorthAmericaKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerNorthAmericaKeywordPage />;
}
