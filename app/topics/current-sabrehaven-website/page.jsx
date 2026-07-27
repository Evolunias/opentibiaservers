import CurrentSabrehavenWebsiteKeywordPage, { generateMetadata } from './current-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenWebsiteKeywordPage />;
}
