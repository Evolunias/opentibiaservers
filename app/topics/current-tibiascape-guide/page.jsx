import CurrentTibiascapeGuideKeywordPage, { generateMetadata } from './current-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeGuideKeywordPage />;
}
