import CyntaraSeasonalServerPolandKeywordPage, { generateMetadata } from './cyntara-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSeasonalServerPolandKeywordPage />;
}
