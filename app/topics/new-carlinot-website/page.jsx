import NewCarlinotWebsiteKeywordPage, { generateMetadata } from './new-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotWebsiteKeywordPage />;
}
