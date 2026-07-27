import TopArchlightOtsKeywordPage, { generateMetadata } from './top-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightOtsKeywordPage />;
}
