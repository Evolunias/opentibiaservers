import CurrentSaintsotGuideKeywordPage, { generateMetadata } from './current-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotGuideKeywordPage />;
}
