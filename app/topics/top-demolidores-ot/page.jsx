import TopDemolidoresOtKeywordPage, { generateMetadata } from './top-demolidores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresOtKeywordPage />;
}
