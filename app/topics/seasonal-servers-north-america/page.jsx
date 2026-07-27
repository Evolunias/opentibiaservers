import SeasonalServersNorthAmericaKeywordPage, { generateMetadata } from './seasonal-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersNorthAmericaKeywordPage />;
}
