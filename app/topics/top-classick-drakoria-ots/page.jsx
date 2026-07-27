import TopClassickDrakoriaOtsKeywordPage, { generateMetadata } from './top-classick-drakoria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassickDrakoriaOtsKeywordPage />;
}
