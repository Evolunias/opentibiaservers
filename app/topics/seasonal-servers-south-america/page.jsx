import SeasonalServersSouthAmericaKeywordPage, { generateMetadata } from './seasonal-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersSouthAmericaKeywordPage />;
}
