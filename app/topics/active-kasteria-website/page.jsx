import ActiveKasteriaWebsiteKeywordPage, { generateMetadata } from './active-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaWebsiteKeywordPage />;
}
