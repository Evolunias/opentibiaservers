import SeasonalServersCanadaKeywordPage, { generateMetadata } from './seasonal-servers-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersCanadaKeywordPage />;
}
