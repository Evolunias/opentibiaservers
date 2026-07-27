import NewArchlightOtKeywordPage, { generateMetadata } from './new-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightOtKeywordPage />;
}
