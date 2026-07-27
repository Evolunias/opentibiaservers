import TopDemolidoresClientKeywordPage, { generateMetadata } from './top-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresClientKeywordPage />;
}
