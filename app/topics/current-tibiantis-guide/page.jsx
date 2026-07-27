import CurrentTibiantisGuideKeywordPage, { generateMetadata } from './current-tibiantis-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisGuideKeywordPage />;
}
