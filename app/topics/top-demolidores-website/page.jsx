import TopDemolidoresWebsiteKeywordPage, { generateMetadata } from './top-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresWebsiteKeywordPage />;
}
