import FreshStartElderaGuideKeywordPage, { generateMetadata } from './fresh-start-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaGuideKeywordPage />;
}
