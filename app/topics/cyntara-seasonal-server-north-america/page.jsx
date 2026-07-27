import CyntaraSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './cyntara-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSeasonalServerNorthAmericaKeywordPage />;
}
