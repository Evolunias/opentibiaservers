import NewClassicusGuideKeywordPage, { generateMetadata } from './new-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusGuideKeywordPage />;
}
