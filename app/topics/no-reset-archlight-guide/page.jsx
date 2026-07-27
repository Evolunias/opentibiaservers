import NoResetArchlightGuideKeywordPage, { generateMetadata } from './no-reset-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightGuideKeywordPage />;
}
