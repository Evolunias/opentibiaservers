import CurrentRealestaWebsiteKeywordPage, { generateMetadata } from './current-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaWebsiteKeywordPage />;
}
