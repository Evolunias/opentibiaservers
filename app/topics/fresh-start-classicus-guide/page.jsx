import FreshStartClassicusGuideKeywordPage, { generateMetadata } from './fresh-start-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusGuideKeywordPage />;
}
