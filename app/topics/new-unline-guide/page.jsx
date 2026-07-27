import NewUnlineGuideKeywordPage, { generateMetadata } from './new-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineGuideKeywordPage />;
}
