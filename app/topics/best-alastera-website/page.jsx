import BestAlasteraWebsiteKeywordPage, { generateMetadata } from './best-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraWebsiteKeywordPage />;
}
