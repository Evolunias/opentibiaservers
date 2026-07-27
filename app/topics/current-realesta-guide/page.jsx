import CurrentRealestaGuideKeywordPage, { generateMetadata } from './current-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaGuideKeywordPage />;
}
