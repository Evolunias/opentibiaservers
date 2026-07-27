import NewSabrehavenWebsiteKeywordPage, { generateMetadata } from './new-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenWebsiteKeywordPage />;
}
