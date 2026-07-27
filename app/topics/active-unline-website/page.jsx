import ActiveUnlineWebsiteKeywordPage, { generateMetadata } from './active-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineWebsiteKeywordPage />;
}
