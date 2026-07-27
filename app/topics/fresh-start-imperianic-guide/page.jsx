import FreshStartImperianicGuideKeywordPage, { generateMetadata } from './fresh-start-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicGuideKeywordPage />;
}
