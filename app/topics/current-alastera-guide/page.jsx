import CurrentAlasteraGuideKeywordPage, { generateMetadata } from './current-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraGuideKeywordPage />;
}
