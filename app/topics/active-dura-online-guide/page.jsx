import ActiveDuraOnlineGuideKeywordPage, { generateMetadata } from './active-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineGuideKeywordPage />;
}
