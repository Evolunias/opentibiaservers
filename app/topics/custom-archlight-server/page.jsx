import CustomArchlightServerKeywordPage, { generateMetadata } from './custom-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightServerKeywordPage />;
}
