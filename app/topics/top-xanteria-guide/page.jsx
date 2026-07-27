import TopXanteriaGuideKeywordPage, { generateMetadata } from './top-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaGuideKeywordPage />;
}
