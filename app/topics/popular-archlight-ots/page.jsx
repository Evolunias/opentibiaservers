import PopularArchlightOtsKeywordPage, { generateMetadata } from './popular-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightOtsKeywordPage />;
}
