import LowrateSabrehavenWebsiteKeywordPage, { generateMetadata } from './lowrate-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenWebsiteKeywordPage />;
}
