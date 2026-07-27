import TopDemolidoresOtServerKeywordPage, { generateMetadata } from './top-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresOtServerKeywordPage />;
}
