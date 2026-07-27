import OfficialDuraOnlineGuideKeywordPage, { generateMetadata } from './official-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineGuideKeywordPage />;
}
