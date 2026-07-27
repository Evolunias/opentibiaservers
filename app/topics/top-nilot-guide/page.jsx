import TopNilotGuideKeywordPage, { generateMetadata } from './top-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotGuideKeywordPage />;
}
