import CurrentNepreniaGuideKeywordPage, { generateMetadata } from './current-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaGuideKeywordPage />;
}
