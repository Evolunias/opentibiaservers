import FreshStartYurotsGuideKeywordPage, { generateMetadata } from './fresh-start-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsGuideKeywordPage />;
}
