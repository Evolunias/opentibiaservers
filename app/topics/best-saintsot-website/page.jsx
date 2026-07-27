import BestSaintsotWebsiteKeywordPage, { generateMetadata } from './best-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotWebsiteKeywordPage />;
}
