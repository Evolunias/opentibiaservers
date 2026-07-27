import NewCarlinotGuideKeywordPage, { generateMetadata } from './new-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotGuideKeywordPage />;
}
