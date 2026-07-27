import CurrentOlderaGuideKeywordPage, { generateMetadata } from './current-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaGuideKeywordPage />;
}
