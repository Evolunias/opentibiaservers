import CyntaraSeasonalServerUsaKeywordPage, { generateMetadata } from './cyntara-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSeasonalServerUsaKeywordPage />;
}
