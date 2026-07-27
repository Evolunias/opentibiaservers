import BestNilotGuideKeywordPage, { generateMetadata } from './best-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotGuideKeywordPage />;
}
