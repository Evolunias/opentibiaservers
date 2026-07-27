import FreshStartArchlightOtKeywordPage, { generateMetadata } from './fresh-start-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArchlightOtKeywordPage />;
}
