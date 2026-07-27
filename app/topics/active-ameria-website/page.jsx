import ActiveAmeriaWebsiteKeywordPage, { generateMetadata } from './active-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaWebsiteKeywordPage />;
}
