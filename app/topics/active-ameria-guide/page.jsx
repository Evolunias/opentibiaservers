import ActiveAmeriaGuideKeywordPage, { generateMetadata } from './active-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaGuideKeywordPage />;
}
