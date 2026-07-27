import PopularDemolidoresGuideKeywordPage, { generateMetadata } from './popular-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresGuideKeywordPage />;
}
