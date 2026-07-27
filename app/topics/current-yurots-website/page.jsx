import CurrentYurotsWebsiteKeywordPage, { generateMetadata } from './current-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsWebsiteKeywordPage />;
}
