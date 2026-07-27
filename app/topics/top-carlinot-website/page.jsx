import TopCarlinotWebsiteKeywordPage, { generateMetadata } from './top-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotWebsiteKeywordPage />;
}
