import TopArchlightOtKeywordPage, { generateMetadata } from './top-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightOtKeywordPage />;
}
