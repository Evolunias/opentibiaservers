import CurrentDemolidoresGuideKeywordPage, { generateMetadata } from './current-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresGuideKeywordPage />;
}
