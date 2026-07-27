import TopCoxaotGuideKeywordPage, { generateMetadata } from './top-coxaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotGuideKeywordPage />;
}
