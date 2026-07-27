import ActiveElderaWebsiteKeywordPage, { generateMetadata } from './active-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaWebsiteKeywordPage />;
}
