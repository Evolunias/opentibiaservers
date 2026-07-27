import PopularArchlightServerKeywordPage, { generateMetadata } from './popular-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightServerKeywordPage />;
}
