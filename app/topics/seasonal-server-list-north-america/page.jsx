import SeasonalServerListNorthAmericaKeywordPage, { generateMetadata } from './seasonal-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServerListNorthAmericaKeywordPage />;
}
