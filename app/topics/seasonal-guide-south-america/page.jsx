import SeasonalGuideSouthAmericaKeywordPage, { generateMetadata } from './seasonal-guide-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideSouthAmericaKeywordPage />;
}
