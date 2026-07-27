import TopClassicusGuideKeywordPage, { generateMetadata } from './top-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusGuideKeywordPage />;
}
