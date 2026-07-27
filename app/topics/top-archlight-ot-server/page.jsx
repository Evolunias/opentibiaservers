import TopArchlightOtServerKeywordPage, { generateMetadata } from './top-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightOtServerKeywordPage />;
}
