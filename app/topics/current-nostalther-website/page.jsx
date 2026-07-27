import CurrentNostaltherWebsiteKeywordPage, { generateMetadata } from './current-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherWebsiteKeywordPage />;
}
