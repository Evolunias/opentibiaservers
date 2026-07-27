import CurrentCyntaraWebsiteKeywordPage, { generateMetadata } from './current-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraWebsiteKeywordPage />;
}
