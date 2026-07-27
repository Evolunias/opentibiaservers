import PopularNilotGuideKeywordPage, { generateMetadata } from './popular-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotGuideKeywordPage />;
}
