import ActiveCarlinotWebsiteKeywordPage, { generateMetadata } from './active-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotWebsiteKeywordPage />;
}
