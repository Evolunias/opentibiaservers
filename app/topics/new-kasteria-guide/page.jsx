import NewKasteriaGuideKeywordPage, { generateMetadata } from './new-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaGuideKeywordPage />;
}
