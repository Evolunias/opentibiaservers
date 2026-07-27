import CustomArchlightOtsKeywordPage, { generateMetadata } from './custom-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightOtsKeywordPage />;
}
