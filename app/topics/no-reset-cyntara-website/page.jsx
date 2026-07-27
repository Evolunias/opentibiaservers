import NoResetCyntaraWebsiteKeywordPage, { generateMetadata } from './no-reset-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraWebsiteKeywordPage />;
}
