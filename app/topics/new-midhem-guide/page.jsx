import NewMidhemGuideKeywordPage, { generateMetadata } from './new-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemGuideKeywordPage />;
}
