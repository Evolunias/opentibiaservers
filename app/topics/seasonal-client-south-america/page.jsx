import SeasonalClientSouthAmericaKeywordPage, { generateMetadata } from './seasonal-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientSouthAmericaKeywordPage />;
}
