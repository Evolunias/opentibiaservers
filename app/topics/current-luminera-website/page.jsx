import CurrentLumineraWebsiteKeywordPage, { generateMetadata } from './current-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraWebsiteKeywordPage />;
}
