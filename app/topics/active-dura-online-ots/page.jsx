import ActiveDuraOnlineOtsKeywordPage, { generateMetadata } from './active-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineOtsKeywordPage />;
}
