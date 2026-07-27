import TopDemolidoresServerKeywordPage, { generateMetadata } from './top-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresServerKeywordPage />;
}
