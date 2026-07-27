import LowrateNilotGuideKeywordPage, { generateMetadata } from './lowrate-nilot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotGuideKeywordPage />;
}
