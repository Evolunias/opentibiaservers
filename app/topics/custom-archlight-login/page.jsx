import CustomArchlightLoginKeywordPage, { generateMetadata } from './custom-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightLoginKeywordPage />;
}
