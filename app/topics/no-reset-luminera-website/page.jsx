import NoResetLumineraWebsiteKeywordPage, { generateMetadata } from './no-reset-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraWebsiteKeywordPage />;
}
