import ActiveNostaltherWebsiteKeywordPage, { generateMetadata } from './active-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherWebsiteKeywordPage />;
}
