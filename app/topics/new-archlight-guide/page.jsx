import NewArchlightGuideKeywordPage, { generateMetadata } from './new-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArchlightGuideKeywordPage />;
}
