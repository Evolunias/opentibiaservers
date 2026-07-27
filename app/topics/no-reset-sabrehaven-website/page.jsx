import NoResetSabrehavenWebsiteKeywordPage, { generateMetadata } from './no-reset-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenWebsiteKeywordPage />;
}
