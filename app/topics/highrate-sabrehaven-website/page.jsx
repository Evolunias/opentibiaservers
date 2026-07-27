import HighrateSabrehavenWebsiteKeywordPage, { generateMetadata } from './highrate-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenWebsiteKeywordPage />;
}
