import TopDemolidoresOtsKeywordPage, { generateMetadata } from './top-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresOtsKeywordPage />;
}
