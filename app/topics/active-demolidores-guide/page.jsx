import ActiveDemolidoresGuideKeywordPage, { generateMetadata } from './active-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresGuideKeywordPage />;
}
