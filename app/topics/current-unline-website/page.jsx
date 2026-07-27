import CurrentUnlineWebsiteKeywordPage, { generateMetadata } from './current-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineWebsiteKeywordPage />;
}
