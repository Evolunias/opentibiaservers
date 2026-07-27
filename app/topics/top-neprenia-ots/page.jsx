import TopNepreniaOtsKeywordPage, { generateMetadata } from './top-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaOtsKeywordPage />;
}
