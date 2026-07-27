import CurrentThaisotGuideKeywordPage, { generateMetadata } from './current-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThaisotGuideKeywordPage />;
}
