import FreshStartSabrehavenWebsiteKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenWebsiteKeywordPage />;
}
