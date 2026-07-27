import NewAmeriaGuideKeywordPage, { generateMetadata } from './new-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAmeriaGuideKeywordPage />;
}
