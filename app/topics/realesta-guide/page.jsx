import RealestaGuideKeywordPage, { generateMetadata } from './realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaGuideKeywordPage />;
}
