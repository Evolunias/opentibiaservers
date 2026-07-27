import PopularDemolidoresOtsKeywordPage, { generateMetadata } from './popular-demolidores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresOtsKeywordPage />;
}
