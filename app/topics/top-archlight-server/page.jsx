import TopArchlightServerKeywordPage, { generateMetadata } from './top-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightServerKeywordPage />;
}
