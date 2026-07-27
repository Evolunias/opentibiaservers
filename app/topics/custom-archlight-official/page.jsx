import CustomArchlightOfficialKeywordPage, { generateMetadata } from './custom-archlight-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightOfficialKeywordPage />;
}
