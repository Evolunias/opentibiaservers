import NewDemolidoresGuideKeywordPage, { generateMetadata } from './new-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresGuideKeywordPage />;
}
