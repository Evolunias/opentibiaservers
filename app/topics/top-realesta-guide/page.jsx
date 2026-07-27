import TopRealestaGuideKeywordPage, { generateMetadata } from './top-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaGuideKeywordPage />;
}
