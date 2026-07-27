import CyntaraSeasonKeywordPage, { generateMetadata } from './cyntara-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSeasonKeywordPage />;
}
