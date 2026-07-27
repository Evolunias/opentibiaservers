import TopArchlightLoginKeywordPage, { generateMetadata } from './top-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightLoginKeywordPage />;
}
