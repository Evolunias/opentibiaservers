import TopClassickDrakoriaWebsiteKeywordPage, { generateMetadata } from './top-classick-drakoria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaWebsiteKeywordPage />;
}
