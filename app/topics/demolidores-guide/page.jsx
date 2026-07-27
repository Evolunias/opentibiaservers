import DemolidoresGuideKeywordPage, { generateMetadata } from './demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresGuideKeywordPage />;
}
