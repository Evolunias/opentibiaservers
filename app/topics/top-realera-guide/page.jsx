import TopRealeraGuideKeywordPage, { generateMetadata } from './top-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraGuideKeywordPage />;
}
