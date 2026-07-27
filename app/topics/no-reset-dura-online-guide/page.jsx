import NoResetDuraOnlineGuideKeywordPage, { generateMetadata } from './no-reset-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineGuideKeywordPage />;
}
