import BestCarlinotWebsiteKeywordPage, { generateMetadata } from './best-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotWebsiteKeywordPage />;
}
