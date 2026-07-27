import NewNilotGuideKeywordPage, { generateMetadata } from './new-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotGuideKeywordPage />;
}
