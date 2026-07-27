import CustomDemolidoresGuideKeywordPage, { generateMetadata } from './custom-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresGuideKeywordPage />;
}
