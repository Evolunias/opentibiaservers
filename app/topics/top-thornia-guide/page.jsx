import TopThorniaGuideKeywordPage, { generateMetadata } from './top-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaGuideKeywordPage />;
}
