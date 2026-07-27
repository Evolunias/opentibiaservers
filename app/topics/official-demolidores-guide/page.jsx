import OfficialDemolidoresGuideKeywordPage, { generateMetadata } from './official-demolidores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresGuideKeywordPage />;
}
